const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Eric Kim.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  // head: ({ title, meta }) => (
  //   <>
  //     {meta.description && <meta name="description" content={meta.description} />}
  //     {meta.tag && <meta name="keywords" content={meta.tag} />}
  //     {meta.author && <meta name="author" content={meta.author} />}
  //   </>
  // ),
  // readMore: 'Read More →',
  // titleSuffix: null,
  // postFooter: null,
  // darkMode: false
}