class Country {
  constructor(name, idolGroups) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

class IdolGroup {
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}

class Idol {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${this.name}이(가) 노래를 합니다.`;
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${this.name}이(가) 춤을 춥니다.`;
  }
}

const iveMembers = [
  {
    name: "안유진",
    year: 2003,
  },
  {
    name: "가을",
    year: 2002,
  },
  {
    name: "레이",
    year: 2004,
  },
  {
    name: "장원영",
    year: 2004,
  },
  {
    name: "리즈",
    year: 2004,
  },
  {
    name: "이서",
    year: 2007,
  },
];

const btsMembers = [
  {
    name: "진",
    year: 1992,
  },
  {
    name: "슈가",
    year: 1993,
  },
  {
    name: "제이홉",
    year: 1994,
  },
  {
    name: "RM",
    year: 1994,
  },
  {
    name: "지민",
    year: 1995,
  },
  {
    name: "뷔",
    year: 1995,
  },
  {
    name: "정국",
    year: 1997,
  },
];

const allTogether = new Country("대한민국", [
  new IdolGroup(
    "방탄소년단",
    btsMembers.map((member) => new MaleIdol(member["name"], member["year"])),
  ),
  new IdolGroup(
    "아이브",
    iveMembers.map((member) => new FemaleIdol(member["name"], member["year"])),
  ),
]);

console.log(allTogether);
