module javali.com.br {
    requires javafx.controls;
    requires javafx.fxml;

    opens javali.com.br to javafx.fxml;
    exports javali.com.br;
}
