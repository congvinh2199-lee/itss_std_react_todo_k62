/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(  ) {
function TodoItem( { item } ) {
  return (
    <label className="panel-block">
    	<input type="checkbox"/>
    	{item.text}
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span className={item.done ? 'has-text-grey-light' : ''}>
      {item.text}
      </span>
    </label>
  );
}
export default TodoItem;