function generateNLongSequenceWithKPreviousElements(n, k) {

    let sequence = [1];

    for (let seqElement = 1; seqElement < n; seqElement++) {

        let indexes = [];

        let positionDistance = k;
        for (let position = 0; position < k; position++) {

            let currentIndex = seqElement - positionDistance;

            if (currentIndex >= 0) {

                indexes.push(currentIndex);
            }

            positionDistance--;
        }

        let sum = 0;

        for (let index of indexes) {

            sum += sequence[index];
        }

        sequence.push(sum);
    }

    return sequence.join(' ');
}