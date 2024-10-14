const Sort = ({ setOrder }) => {
  return (
    <select
      defaultValue=""
      onChange={(e) => setOrder(e.target.value)}
      className="rounded-md p-2 shadow-sm"
    >
      <option disabled value="">
        Süreye Göre
      </option>
      <option value="asc">Artan</option>
      <option value="desc">Azalan</option>
    </select>
  );
};

export default Sort;
