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
    .use(remarkGridTables)
    .use(remarkRehype)
    .use(rehypeStringify)

    .process(`

# Grid table

## Basic example

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

    `, (err, file) => {
        console.log({err, file});
    })

}