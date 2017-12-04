
const ARTICLES = [
        {
            title: "'Rope. Tree. Journalist': Walmart yanks lynching T-shirt made by controversy-steeped Teespring",
            author: 'Elizabeth Weise, USATODAY',
            content: "SAN FRANCISCO — Custom T-shirt design company Teespring is once again on the defensive after a media group found it was selling a T-shirt about lynching journalists on its site and as a third party seller on Walmart.com."
        }, {
            title: "Uber told potential investor SoftBank about big breach before public and riders",
            author: 'Mike Snider, USA TODAY',
            content: `Uber informed potential investor SoftBank about a large data breach before it told riders and drivers, the company said as new details emerged about a year-old breach whose cover-up has triggered U.S. states and British regulators to open inquiries. In the breach, which took place in October 2016, hackers stole names, email addresses and phone numbers of 50 million Uber riders and 7 million drivers, and drivers' license numbers from 600,000 US. Uber drivers, Uber CEO Dara Khosrowshahi said Tuesday on Uber's blog.`
        }
    ];

class Article extends React.Component {
    render () {
        return (
            <li>
                <h2>{this.props.title}</h2>
                <article>
                    <address>
                        {this.props.author}
                    </address>
                    <p>{this.props.content}</p>
                </article>
            </li>);
    }
};

class ArticlesList extends React.Component {
    render () {
        return (
            <ul>
                {
                    this.props.displayedArticles.map(function (el) {
                        return (<Article
                            title={el.title}
                            author={el.author}
                            content={el.content}
                        />)
                    })
                }
            </ul>
        )
    }
};


ReactDOM.render(
    <ArticlesList displayedArticles={ARTICLES}/>,
        document.getElementById('content'));