const swap = (vetor, pos1, pos2) => {
    const temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

const shuffle = (vetor, quantidadeTrocas) => {
    for (let i = 0; i < quantidadeTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivotIndex = particionamento(vetor, inicio, fim, vetor[fim]);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
};

const particionamento = (vetor, inicio, fim, pivot) => {
    let i = inicio - 1;
    
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    
    swap(vetor, i + 1, fim);
    return i + 1;
};
