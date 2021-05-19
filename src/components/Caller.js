export default class Caller {
  static async getData(searchTerm){
    try {
      const response = await fetch(
      'https://paleobiodb.org/data1.2/taxa/list.json?name=' + searchTerm + '&show=full'
      );
      if (!response.ok) { throw Error(response.StatusText);}
      const data = response.json();
      return data.records[0];
    } catch(error) {
      console.log(error);
    }
  }

  static dataSet(searchTerm, source = Caller.getData(searchTerm)){
    const records = source;
    return {
      range: (<ul>
                <li>Time: {records.tei}-{records.tli}</li>
                <li>Navigation: {records.jlh} </li>
              </ul>),
      ecology: (<ul> tba </ul>),
      taxonomy: (<ul> tba </ul>)
    }
  }
}
