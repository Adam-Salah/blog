export default function A(props: { href: string; children: string}) {
    return <a href={props.href} className='bold underline'>{props.children}</a>;
}
