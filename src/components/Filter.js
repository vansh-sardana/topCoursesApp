
const Filter = (props) => {
  const filterData = props.filterData;
  const filter = props.filter;
  const setFilter = props.setFilter;

  function clickHandler(key) {
    setFilter(Number(key));
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-center">
      {filterData.map((data) =>
        <button
          className={`text-lg px-2 py-1 m-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-300 ${(filter==data?.id)? "border-2": "border-transparent"}`}
          key={data?.id} onClick={() => {
            clickHandler(data?.id);
          }
          }> {data?.title}
        </button>
      )}
    </div>
  )
}

export default Filter
