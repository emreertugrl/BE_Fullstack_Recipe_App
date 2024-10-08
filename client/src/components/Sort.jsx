const Sort = () => {
  return (
    <select className="rounded-md p-2 shadow-sm">
      <option disabled selected>
        Süreye Göre
      </option>
      <option value="asc">Artan</option>
      <option value="desc">Azalan</option>
    </select>
  );
};

export default Sort;
