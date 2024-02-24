document.getElementById('more-link').addEventListener('click', function () {

    var moreDiv = document.getElementById('More');
    if (moreDiv.style.display === 'none') {

        moreDiv.style.display = 'block';
        this.innerHTML = 'Less -';

    } else {

        moreDiv.style.display = 'none';
        this.innerHTML = 'More +';
    }
});
