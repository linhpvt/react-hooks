import React from 'react';
const PostRow = ({ userId, id, title, body }) => {
  // console.log('ROW')
  return (
    <tr>
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
}
export default React.memo(PostRow);