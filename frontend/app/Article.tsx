import { formatWithOptions } from 'date-fns/fp'
import { fr } from 'date-fns/locale'

type Props = {
    item: Article;
}

export default function Article({item}: Props) {

    return (
        <article key={item.id} className="c-card bg-slate-100 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 rounded-lg shadow-sm hover:bg-slate-200">
            <div className="c-card__thumb">
                {item.image && <img className="rounded-t-lg shadow-md w-full" src={item.image} />}
            </div>
            <div className="c-card__content p-5">
                <h3 className="c-card__title">{item.title}</h3>
                <section className="mt-2 c-card__tease line-clamp-6">{item.description}</section>
                <footer className="text-gray-400 italic space-x-1 pt-5 ml-auto  text-right ml-auto">
                    <p className="c-card__meta">{item.source}</p>
                    <p className="c-card__meta">
                        {formatWithOptions({ locale: fr}, 'd MMMM yyyy', new Date(item.publishedAt))}
                    </p>
                    
                </footer>
            </div>
        </article>
    )
}