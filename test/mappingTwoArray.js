// return 2 array in single result

const data1 = [
  { nama: "rendra", usia: 26, status: false },
  { nama: "vita", usia: 26, status: false },
  { nama: "gemoy", usia: 3, status: false },
];
const data2 = [
  { namaLengkap: "muhammad Rendra Andriansyah", alamat: "bogor" },
  { namaLengkap: "evita sari", alamat: "jakarta" },
  { namaLengkap: "gemoy parah", alamat: "cikampek" },
];

const mapping = (data1, data2) => {
  return data1.map((x, i) => {
    return [data2[i].namaLengkap, x.nama, x.usia, data2[i].alamat];
  });
};

console.log(mapping(data1, data2));
