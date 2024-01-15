import NavBar from '@/components/navigation'
import styles from './layout.module.scss'

export default function HomeLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.home}>
            {/* Include shared UI here e.g. a header or sidebar */}
            <NavBar />

            {children}
        </section>
    )
}