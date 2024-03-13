import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { IniciaBotao } from "./botao_inicial"

export const AreaInicial = () => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Pesquisa de satisfação</CardTitle>
                <CardDescription>Ajude-nos a melhorar nossos serviços, seu olhar é muito importante
                    para nossas tomadas de decisões!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <IniciaBotao />
            </CardContent>

        </Card>

    )
}