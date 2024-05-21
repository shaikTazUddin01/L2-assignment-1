//created Student interface
interface Student {
    name: string;
    age: number;
    grades: number[]
}

//created calculateAverageGrade function
const calculateAverageGrade = (stuInFo: Student): number => {

    const sumOfGrades:number = stuInFo?.grades?.reduce((accumulatorValue, currentValue) => accumulatorValue + currentValue)

    const averageGrade:number=sumOfGrades/stuInFo?.grades?.length;
    
    return averageGrade;
}

const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};


const averageGrade:number = calculateAverageGrade(student1);

console.log(averageGrade);