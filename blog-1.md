<h1> 1.The significance of union and intersection types in Typescript.</h1>

<h3>Union Type : </h3>
<p>union type in typescript allow for the combination of one or more type in a single type and it provide me flexibility in defining variables or parameters that can hold values in different type. It denoted by ( '|' ) symbol.</p>
<p style="font-weight:bold">Example:</p>
<span>type Result = number | string ;</span>
</br>
</br>
<span>function myFunction (result:Result) : Result {</br>
        if( typeof(result) === "string" ){</br>
        return "This is string type value"; <br>
        }
        <br>
         if( typeof(result) === "number" ){</br>
        return "This is number type value" ;<br>
        }
    </br>
}
<br>

const something = myFunction("someting");<br>
console.log(something);
</span>
<br>
<br>

<h3>Intersection Type : </h3>
<p>Intersection type is nearby union type but here some differents. Instersection type is a combination of more type in one. when we use union type then we must use one type to variable or function but when we use intersection type then all type execute mandatory.Intersection denoted by ( '&' ) symbol.</p>

<p style="font-weight:bold">Example:</p>
<span>type Student1 = {</br>
            id:number;</br>
            name:string;
<br>}
</span>
<br>
<span>type Student2 = {</br>
            email:string;
<br>}
</span>
<br>
<span>type Student = Student1 & Student2 ;
</span>
</br>
</br>

let student : Student = {
    <br>
    id:22032545;<br>
    name:"Shaik taz uddin",
    <br>
    email:"tazahmedsoft@gmail";<br>
}


<br>
<br>