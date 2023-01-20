class Student {
  constructor(fn, lastn) {
    this.fn = fn;
    this.lastn = lastn;
  }
}

const s1 = new Student("seo", "jeongwoo");
const s2 = new Student("park", "jeongsu");

console.log(s1.fn, s1.lastn);
console.log(s2.fn, s2.lastn);
