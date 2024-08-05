<h3>Adaptadores de saída para api externa ou outros serviços externos</h3>

- São componentes que fazem a ponte entre o sistema interno e serviços ou sistemas externos(APIs por exemplo). Esses adaptadores implementam as interfaces definidas nas portas de saída, garantindo que a comunicação com serviços externos seja consistente e desacoplada da lógica de negócio interna.

- Função: Eles são responsáveis por realizar chamadas a essas APIs, converter os dados para o formato necessário e tratar a resposta recebida.
  Comunicação com Serviços Externos: Realizam chamadas HTTP ou outros tipos de comunicação com APIs de terceiros.
  Conversão de Dados: Convertem dados do formato interno para o formato requerido pela API externa e vice-versa.
  Tratamento de Erros: Lidam com erros e exceções que podem ocorrer durante a comunicação com serviços externos

Resumindo Fornecem a lógica específica para interagir com serviços externos. (são com os srvices)

- exemplo implementação do Adaptador de Serviço Externo :

```bash
import { ExternalApiService } from '../../../application/ports/out/ExternalApiService';
import axios from 'axios';

export class ExternalApiServiceImpl implements ExternalApiService {
  async enviarNotificacao(mensagem: string, clienteId: string): Promise<void> {
    try {
      await axios.post('https://api.externaservico.com/notificacao', {
        mensagem,
        clienteId,
      });
    } catch (error) {
      // Tratamento de erros
      console.error('Erro ao enviar notificação:', error);
      throw new Error('Erro ao comunicar com o serviço de notificação externo');
    }
  }
}
```
