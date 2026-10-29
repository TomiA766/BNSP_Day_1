const barang1 = {
  kode: "inv001",
  nama: "Laptop",
  stok: 15,
  harga: 7500000,
};

console.log(barang1.nama); // Laptop
console.log(barang1.stok); // 15

barang1.nama = "Laptop"
barang1.stok = 10;

const jumlahBarang = 10
const hargasatuan = 7500000

const totalNilai = jumlahBarang * hargasatuan
console.log("total nilai", totalNilai)

const stok = 0;

console.log(stok === 0);
console.log(stok > 0);