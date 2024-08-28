import Student from './component/student/student';
import StudentReview from './component/student/StudentReview';

// main function 
export default function MainBody (){
  const whatwelearn ="React Js";  // we use it everywhare in our main body
  const lectureCount = "3";
  return (
    <div>
  <p>in this course you will learn {whatwelearn} by bulding myapp</p> <br></br>
  total lecture-{lectureCount}
  <ul>
    <li>basic foundation</li>
    <li>functional and class components</li>
  </ul>
  {/* <div>
    enter task : {""}
    <input readOnly maxLength={7} placeholder='naveed'></input>
  </div> */}
   <div className='container row'>
  student Enroled
  </div>
  <Student name="Naveed Rashid" experiance = {2}>
    <StudentReview></StudentReview>   
  </Student>
  <Student name="Awais Saleem" experiance = {1} >
  <StudentReview></StudentReview>
  </Student>
  <Student name="Abid Jan" experiance = {0.6} />
  <Student name="jalal Shah" experiance = {0.3}  />
  

</div>

  )
}
