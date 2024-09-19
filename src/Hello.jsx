import './Hello.css'
export default function Hello ({firstname,lastname="Jaidee",age=25}) {
    return (
    <div>
    <h1>Hello World {firstname} {lastname} {age}</h1>
    <hr />
    </div>
);
}
