function runText() {
    const textElement = document.getElementById('text');
    let text = textElement.textContent;
    text = text.substring(1) + text[0]; // Geser karakter pertama ke akhir
    textElement.textContent = text;
}

// Jalankan fungsi runText setiap 200ms
setInterval(runText, 200);

document.addEventListener('DOMContentLoaded', function() {
    const selectBox = document.querySelector('.select-box');
    const selectedOption = selectBox.querySelector('.selected-option');
    const options = selectBox.querySelector('.options');

    // Toggle dropdown saat diklik
    selectedOption.addEventListener('click', function() {
        selectBox.classList.toggle('active');
    });

    // Menutup dropdown saat mengklik di luar
    document.addEventListener('click', function(e) {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove('active');
        }
    });

    // Menangani pilihan opsi
    document.querySelectorAll('.option').forEach(function(option) {
        option.addEventListener('click', function() {
            // Update teks yang terpilih
            selectedOption.textContent = this.textContent;
            selectBox.classList.remove('active');
            
            // Memuat konten berdasarkan data-value
            const pageToLoad = this.getAttribute('data-value');
            fetch(pageToLoad)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Gagal memuat halaman');
                });
        });
    });
});

document.getElementById("moreInfoBtn").addEventListener("click", function() {
    window.location.href = "../jerseyrrq.html";
  });

  let slideIndex = 0;
showSlides();

function tampilkanHarga() {
    // Ambil elemen select
    var pilihan = document.getElementById("pilihan").value;

    // Ambil elemen harga
    var hargaElement = document.getElementById("harga");

    // Tentukan harga berdasarkan opsi yang dipilih
    var harga;
    if (pilihan == "1") {
        harga = "Rp 50.000/bulan";
    } else if (pilihan == "2") {
        harga = "Rp 80.000/bulan";
    } else if (pilihan == "3") {
        harga = "Rp 120.000/bulan";
    } else {
        harga = "-";
    }

    // Tampilkan harga
    hargaElement.innerHTML = "Harga: " + harga;
}