import prisma from "../src/config/database.js";

async function main(){
    await prisma.cars.createMany({
        data: [
            {
              "model": "X1",
              "licensePlate": "ABI2239",
              "year": 2018,
              "color": "BRANCO"
            },
            {
              "model": "CIVIC",
              "licensePlate": "BPA1018",
              "year": 2021,
              "color": "CINZA"
            },
            {
              "model": "ONIX",
              "licensePlate": "CFA2717",
              "year": 2023,
              "color": "AMARELO"
            },
            {
              "model": "EVOLUTION",
              "licensePlate": "DPR6656",
              "year": 2005,
              "color": "CINZA"
            },
            {
              "model": "UNO",
              "licensePlate": "EMP7934",
              "year": 2000,
              "color": "PRETO"
            },
            {
              "model": "320i",
              "licensePlate": "FAS5543",
              "year": 2017,
              "color": "BRANCO"
            },
            {
              "model": "luiza",
              "licensePlate": "GBC9098",
              "year": 2001,
              "color": "AZUL"
            },
            {
              "model": "luiza",
              "licensePlate": "HBC9099",
              "year": 2001,
              "color": "AZUL"
            },
            {
              "model": "luiza",
              "licensePlate": "IBC9098",
              "year": 2001,
              "color": "AZUL"
            },
            {
              "model": "luiza",
              "licensePlate": "JBC9094",
              "year": 2001,
              "color": "AZUL"
            }
          ]
        })
}

main()
.then(() => {
    console.log("Registro feito com sucesso!")
})
.catch(e => {
    console.log(e);
    process.exit(1);
})
.finally(async() => await prisma.$disconnect());
