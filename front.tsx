import { React } from "./dep.ts";

const App: React.FC<any> = (colors: string[]) => <html>
<form action="/" method="POST">
    <label>Color:</label>
<input type="text" id="color" name="color"/>
<input type="submit" value="Submit using POST"/>
</form>
<ul>{colors.map(color => {
return <li>{color}</li>
})}</ul>
</html>;

export default App;