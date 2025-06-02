document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.sidebar-link').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-link').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.remove('hidden');
      });
    });
  
    
    const profileBtn = document.getElementById('profileBtn');
    const dropdown = document.getElementById('dropdownMenu');
  
    profileBtn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
  
    document.addEventListener('click', () => dropdown.classList.add('hidden'));
});


  