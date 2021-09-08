



/*----Components----*/
import AuthForm from "../components/Auth-form";

export default function Authentication(){
    return(
        <section style={{marginTop: '100px'}}>
            <div className='text-center'>
                <img src="/icons/logo.svg" alt="Logo"/>
            </div>
            <AuthForm />
        </section>
    )
}
