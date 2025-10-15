import books_data from '../assets/data/booklist_data';
import Wrapper from '../assets/wrappers/BookLise_31';

console.log('books_data', books_data);
const BookListPage_31 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data.map((book) => {
          return (
            <article className='book'>
              <img src={book.img} />
              <div className='bookinfo'>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default BookListPage_31;
