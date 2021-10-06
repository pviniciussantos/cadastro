<template>

<!-- Bloco inteiro da página -->
<div class="p-5 text-left container border border-white bg-white text-dark" style="border-radius: 25px;
box-shadow: 3px 6px 8px 3px rgba(100, 100, 100, 0.3)">
<h1 class="py-2">Sobre o  Profissional</h1>
<h4 class="py-2">Dados do Profissional</h4>

<!-- Início do Formulário -->
<div class="row" v-if="page == 1">
<form class="col-6">
    <div class="form-row" >
      <div class="py-2 form-group col-md-8 col-lg-12">
        <label for="name">Nome Completo: {{ page }} </label>
        <input type="name" class="form-control" id="name" placeholder="Digite o nome completo">
      </div>
        
      <div class="py-2 form-group col-md-8">
        <label for="number">CPF:</label>
        <input type="numer" class="form-control" id="number" placeholder="Digite o CPF" >
        <small id="emailHelp" class="form-text text-muted">O padrão 000.000.000-00</small>
      </div>
      
      <div class="py-2 form-group col-md-8">
        <label for="tel">Número de Telefone:</label>
        <input type="number" class="form-control" id="tel" placeholder="Digite o telefone" >
        <small id="emailHelp" class="form-text text-muted">O padrão (00) 0 0000-0000</small>
      </div>
    </div>
  
  <div class="py-2 form-row">
    <div class="form-group col-md-">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option value="1">Paraná</option>
        <option value="2">Rio Grande do Sul</option>
        <option value="3">Santa Catarina</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCidade">Cidade</label>
      <select id="inputCidade" class="form-control">
        <option selected>Escolher...</option>
        <option value="1">Londrina</option>
        <option value="2">Maringá</option>
        <option value="3">Pelotas</option>
        <option value="4">Porto Alegre</option>
        <option value="5">Florianópolis</option>
        <option value="6">Joinville</option>
      </select>
    </div>   
  
  </div>
  
  <button type="button" class="btn btn-primary" v-on:click="page++">Avançar</button>
  
</form>
<!-- Figura da Página -->
  
<div class="col-6 d-none d-lg-block">
  <img src="./atendimento_medico.png" alt="Atendimento Médico" style="max-width: 100%">
</div>
 
</div> 

</div> 

 <div class="p-5 text-left container border border-white bg-white text-dark" style="border-radius: 25px;
    box-shadow: 3px 6px 8px 3px rgba(100, 100, 100, 0.3)">
    <h1 class="py-2">Sobre o atendimento</h1>
    <h4 class="py-2">Detalhes do atendimento</h4>
    
    <div class="row">
<form class="col-6 ">

    <div class="form-group">
      <label for="inputEspecialidade">Atividade principal</label>
      <select id="inputEspecialidade" class="form-control">
        <option selected>Selecione a especialidade</option>
        <option value="1">Cardiologia</option>
        <option value="2">Dermatologia</option>
        <option value="3">Neurologia</option>
        <option value="4">Oftalmologia</option>
        <option value="5">Psiquiatria</option>
        <option value="6">Urologia</option>
      </select>
    </div>

    <p class="py-1">Informe o valor da consulta</p>
    <div class="input-group mb-3">
        <button class="btn btn-primary" type="button" id="button-addon1">R$</button>
        <input type="text" class="form-control" placeholder="Valor">
    </div>

    <p class="pt-4">Formas de pagamento da Consulta:</p>

    <div class="p-4 form-check border col-8 mb-3" style="background-color: #f9f9f9; border-radius: 10px">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultPix">
        <label class="form-check-label" for="flexCheckDefaultPix">
            Pix
        </label>
    </div>

    <div class="p-4 form-check border col-8 mb-3" style="background-color: #f9f9f9; border-radius: 10px">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultDinheiro">
        <label class="form-check-label" for="flexCheckDefaultDinheiro">
            Em dinheiro
        </label>
    </div>

    <div class="p-4 form-check border col-8" style="background-color: #f9f9f9; border-radius: 10px " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultCartaoCredito">
        <label class="form-check-label" for="flexCheckDefaultCartaoCredito">
            Cartão de crédito
        </label>
        <div class="credito">
        <div class="form-check collapse" id="collapseExample">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                1x, sem juros
            </label>
        </div>
        <div class="form-check collapse" id="collapseExample">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                2x, sem juros
            </label>
        </div>
        <div class="form-check collapse" id="collapseExample">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                3x, sem juros
            </label>
        </div>
        </div>
    </div>
    </form>
    <!-- Figura da Página -->
  
    <div class="col-6 d-none d-lg-block">
      <img src="./consultorio.png" alt="Atendimento Médico" style="max-width: 100%">
    </div>
    </div>
    <button type="submit" class="mt-4 btn btn-primary">Avançar</button>

 
</div>

</template>

<script>
export default {
  name: 'Cadastro',
  data: function(){
    return {
      page: 1
    }
  }  
  
}


</script>
