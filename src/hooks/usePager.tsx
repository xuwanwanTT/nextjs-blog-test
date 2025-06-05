import Link from "next/link";
import _ from 'lodash';

type Options = {
  page: number;
  totalPage: number;
  urlMaker?: (n: number) => string;
};

export const usePager = (options: Options) => {
  const { page, totalPage, urlMaker = (n: number) => `?page=${n}` } = options;
  const numbers: number[] = [];

  numbers.push(1);
  for (let i = page - 3; i <= page + 3; i++) {
    numbers.push(i);
  }
  numbers.push(totalPage);

  const pageNumbers = _.uniq(numbers).sort((a, b) => a - b).filter(n => n >= 1 && n <= totalPage).reduce((result, n) => {
    return (n - (result[result.length - 1] || 0)) === 1 ? result.concat(n) : result.concat(-1, n)
  }, []);

  const pager = (
    <div>
      {page !== 1 && <Link href={urlMaker(page - 1)}>上一页</Link>}
      {pageNumbers.map(n => n === -1 ? <span>...</span> : <Link href={urlMaker(n)} style={{
        color: n === page ? 'red' : '#333',
        margin: '0 10px'
      }}>{n}</Link>)}
      {page < totalPage && <Link href={urlMaker(page + 1)}>下一页</Link>}
      <span style={{ marginLeft: 15 }}>第 {page} / {totalPage} 页</span>
    </div>
  );
  return { pager }
};