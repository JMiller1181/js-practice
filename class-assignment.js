class Job {
  constructor(name, industry, requiresDegree, field, salaried) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.salaried = salaried;
  }
  getName() {
    return this.name;
  }
  getFieldAndIndustry() {
    let fieldAndIndustry = [this.field, this.industry];
    return (
      "This job is in the " +
      fieldAndIndustry[0] +
      " field, in the " +
      fieldAndIndustry[1] +
      " industry."
    );
  }
  needDegree() {
    return this.requiresDegree;
  }
  isSalaried() {
    return this.salaried;
  }
}
class Position extends Job {
  constructor(name, industry, requiresDegree, field, salaried, department) {
    super(name, industry, requiresDegree, field, salaried);
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
}

let envSci = new Job(
  "Environmental Scientist",
  "Consulting",
  true,
  "Geology",
  true
);
let softDev = new Job(
  "Software Developer",
  "Technology",
  false,
  "Software Development",
  true
);
let socPro = new Job("Professional Athlete", "Sports", false, "Soccer", true);
console.log(envSci.getName());
console.log(envSci.getFieldAndIndustry());
console.log(softDev.getName());
console.log(softDev.getFieldAndIndustry());
console.log(socPro.getName());
console.log(socPro.getFieldAndIndustry());
let PM = new Position(
  "Project Manager",
  "Consulting",
  true,
  "Hydrology",
  true,
  "Environmental"
);
console.log(PM.isSalaried());
console.log(PM.getDepartment());
