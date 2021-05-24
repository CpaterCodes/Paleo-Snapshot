

export default function Page(props){
  const data = props.data;

  switch(props.page){
    case "Range":
      return (<section className="data-body">
                <ul>
                  <li>Time: {data.tei}-{data.tli}</li>
                  <li>Navigation: {data.jlh} </li>
                </ul>
            </section>
              );
    case "Ecology":
      return (<section className="data-body">
                <ul>
                  <li>Diet: {data.jdt}</li>
                  <li>Reproduction: {data.jre}</li>
                  <li>Environment: {data.jev}</li>
                </ul>
            </section>
              );

    case "Taxonomy":
      return (<section className="data-body">
                <ul>
                    <li>Phylum: {data.phl}</li>
                    <li>Class: {data.cll}</li>
                    <li>Order: {data.odl}</li>
                    <li>Family: {data.fml}</li>
                    <li>Genus: {data.gnl}</li>
                 </ul>
              </section>
               );
    default:
      return (<p> Error: No page selected</p>);
  }
}
