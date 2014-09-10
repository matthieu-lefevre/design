Sub isda_obligations()
    get_isda ("Obligations")
End Sub

Sub get_isda(ByVal title As String)
    Set titleCell = Range("A1:Z65536").Find(title, LookIn:=xlValues)
    
    If Not titleCell Is Nothing Then
        Dim titleRow, titleColumn, lastColumn, lastRow, labelId As Integer
        
        titleRow = titleCell.Row
        titleColumn = titleCell.Column
        lastColumn = Range(Cells(titleRow, titleColumn).Address).End(xlToRight).Column
        lastRow = Range(Cells(titleRow, titleColumn).Address).End(xlDown).Row
        labelId = 1
        
        For c = titleColumn + 1 To lastColumn
            Dim tLabel, dLabel, dValue As String
            tLabel = Range(Cells(titleRow, c).Address).Value
            
            For r = titleRow + 1 To lastRow
                dLabel = Range(Cells(r, titleColumn).Address).Value
                
                dValue = Range(Cells(r, c).Address).Value
                
                If Not dValue = "" Then
                    create_SqlQueries labelId, tLabel, dLabel, dValue
                    labelId = labelId + 1
                End If
            Next r
        Next c
    End If

End Sub

Sub create_SqlQueries(ByVal labelId As Integer, ByVal tLabel As String, ByVal dLabel As String, ByVal dValue As String)

    MsgBox tLabel & " - " & dLabel & ": " & dValue

End Sub
