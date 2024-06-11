const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  })

  input.value = ''

  mostrarTarefas()
}

function mostrarTarefas() {
  let novaLi = ''

  // ['comprar café', 'estudar programação']

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
        <li class="task ${item.concluida && 'done'}">
            <p>${item.tarefa}</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nN2VS07DQAyG02vADWiXSDwW9aQq3CD2XKJljdj3EiA4Bgi12EFsygKuAMvCigOUIKeVmpQkMwkPCSx5k5l8/3jssYPgf1sStEDoCgSfjNhh/85u9MbRphE6AqZnXdM9jfkmJjJCSZWHEmEjeBjTvhF8dQkYppeuRHt+0IltG6FTw/hgmN6d8JWI7n0ExjNllF+J4IU3VEr9vEKARt8gMKoSOKkDA8Y3YJqufTsuFQDBcQ34DBg76cGY7lf5wOtiOOOgCRwYOxrJ2vogXz0xHZZVDTBNs4AC+KyoqrpiD5wCCs+CvOBLAWDsO69okcQc0A1P3Q69kwyZU3vBy5JcVaaQitjthVed3FGmv/DQ8GdbRTixbW1Yy8Y1r/Eu5tog9d/ebbRVKpBLOOOutmKfR2du7I4X9FNEEqEzgpgoaGxJ0DKClzoedUzquMyOTF370sj8E/YBn1W1MMlWzPEAAAAASUVORK5CYII "alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVR4nO2UPUoEQRCFF7yAN/AEe4JN/EHQqOe9YdFQE2UDjRRDZS9garihGBtpYuwPIoKRmW4uCGJVoyO9uMvMMMJUM2CyBR3U66K/rtc/rdY0mo6s250RckOBg/EIedAbgwiw6dN0Pq95ciGAmoQcWfRaoWSvYA1wmc//1MmebfdkX8ms7hCyH9PNvgWiwJ4dAmybIOSWGSLAutGuNTPEJ8lq1WKfZKLkc1kP9WaIkp0KyK2QF8H/irmOGSLOtUuLPE06AHYU2C3Y5VzbDPkg5wp2AIsKDEYLAm9KPubnQ70Zkjk3m7ueD0KelDp7EfJqnIf62E/xe3LYwKkAouShkMdKnnlgRYCvUBf9WQrw/rvTYM3dCAoMhDwPl0DJ+6CFulZsKDms+dpfoyEC3NR8iNfREA8s1+hm6NN0KRoyjX+JH0TC5GnIWdeMAAAAAElFTkSuQmCC"alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>
        
        `
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefas()
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1)

  mostrarTarefas()
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista')

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
  }

  mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)