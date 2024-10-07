import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Ошибка! Перенаправление...</h1>
            <img 
                  src="/images/error.jpg" 
                alt="Ошибка"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    );
}

export default Error;
