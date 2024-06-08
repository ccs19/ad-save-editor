import ReactJson from "react-json-view";


export default function JsonComponent({jsonString}: {jsonString: Object}) {
    return (
        <div className={"basis-full"}>
        <ReactJson src={jsonString}  theme={"monokai"} indentWidth={2} collapsed={1} name={null}/>
        </div>
    )
}
