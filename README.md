# Pallet Sensing Challenges

Pallet Sense is a leader in IoT-enabled smart pallet solutions, providing GPS-equipped pallets that transmit **location, timestamp, and temperature data**.  
This project focuses on detecting **pallet loss** using AI/ML techniques and visualizing insights on an interactive dashboard.

---

## 🚀 Features
- **Hotspot Deviation Zone Detection**:  
  Implemented using **K-Means Clustering** to identify nearby lost pallets and deviation zones.  
- **Live Dashboard**:  
  Built with **React.js** to visualize:  
  - Pallet loss hotspots  
  - Real-time accuracy & entropy metrics  
  - Live tracking of pallet data  
- **Geospatial Visualization**:  
  Used **Python + Folium** for mapping and analyzing pallet deviation zones.

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS  
- **Backend/ML**: Python, Scikit-learn  
- **Visualization**: Folium (geospatial mapping)  
- **AI/ML**: K-Means clustering, anomaly detection  

---
## 📷 Download Report
[Download](https://drive.google.com/file/d/1dW8hkO1EO_F10Q0Ujp0KG0Nd29glEmZR/view?usp=drive_link)
---
## 📷 Screenshots

### Dashboard View
![Dashboard](https://github.com/user-attachments/assets/0e5178e4-0ad0-4d81-83d7-6908c15953c5)

### Route Accuracy Bar Graph
![Route Accuracy](https://github.com/user-attachments/assets/f76c3b61-2c89-4b70-9125-77bdcef39645)

### Accuracy Metrics
![Accuracy](https://github.com/user-attachments/assets/765c5ceb-d462-4ab9-9ebd-c4b6952e992b)

### Dwell Time Threshold Analysis 
![Accuracy](https://github.com/user-attachments/assets/b95e05ce-bfe1-433f-a16b-84bd8c67b94f)

### Loss Pallets
![Loss Pallets](https://github.com/user-attachments/assets/6d45fcde-8443-4c4a-afe9-4c791cf1cc29)

### Rolling Time Windows
![Rolling Time Windows](https://github.com/user-attachments/assets/663bf53c-f613-4f69-834d-936b25d7e1b6)

---

## 📊 Project Workflow
1. Collect pallet data (location, timestamp, temperature).  
2. Apply **K-Means Clustering** to detect deviation zones and hotspots.  
3. Send processed data to the React.js frontend.  
4. Visualize live metrics: **Pallet Loss, Accuracy, and Entropy**.  

---

## 🔧 Installation & Cloning
### Backend (Python)
```bash
# Clone repository
git clone https://github.com/your-username/pallet-sensing.git
```
