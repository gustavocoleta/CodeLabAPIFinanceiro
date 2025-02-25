import { IsNotEmpty } from 'class-validator';
import { EMensagem } from '../../../shared/enums/mensagem.enum';

export class CreateContaReceberBaixaDto {
  @IsNotEmpty({ message: `idUsuarioBaixa ${EMensagem.NaoPodeSerVazio}` })
  idUsuarioBaixa: number;
  
  @IsNotEmpty({ message: `valorPago ${EMensagem.NaoPodeSerVazio}` })
  valorPago: number;
    
}
