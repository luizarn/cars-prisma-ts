import prisma from "../config/database.js";

async function getCars() {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await  prisma.cars.findFirst({where: {id: id}})
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await  prisma.cars.findFirst({where: {licensePlate: licensePlate}})
  return data
}

async function createCar(model: string, licensePlate: string, year: number, color: string, id: number) {
  await  prisma.cars.upsert({where: { id: id },
    update: {model, licensePlate, year, color },
    create: {model, licensePlate, year, color },
  })
}

async function deleteCar(id: number) {
  await  prisma.cars.delete({where: {id: id}});
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;