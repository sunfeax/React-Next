import { APP_NAME } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer id="footer" className="border-t">
            <div className="p-5 flex-center">
                {currentYear} {APP_NAME}. Todos los derechos son reservados.
            </div>
        </footer>
    )
}