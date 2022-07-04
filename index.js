import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkGridTables from 'remark-grid-tables'


main()

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(remarkGridTables)
    .process(`
    +-------+----------+------+
    | Table Headings   | Here |
    +-------+----------+------+
    | Sub   | Headings | Too  |
    +=======+==========+======+
    | cell  | column spanning |
    + spans +----------+------+
    | rows  | normal   | cell |
    +-------+----------+------+
    | multi | cells can be    |
    | line  | *formatted*     |
    |       | **paragraphs**  |
    | cells |                 |
    | too   |                 |
    +-------+-----------------+
    `)

  console.log(String(file))
}