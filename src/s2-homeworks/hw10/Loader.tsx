import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg width="50" height="50">
        <circle r="20" cx="25" cy="25" className={s.progress}></circle>
    </svg>
</div>

//for variants 1,2
// export const Loader = () => <div className={s.loader}/>
