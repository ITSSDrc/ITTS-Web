
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:qr_flutter/qr_flutter.dart';

/// Un widget d'invitation de prestige au style "Rustic Botanical".
/// Ce widget est conçu pour être une copie conforme de la version Web ITSS DRC.
class InvitationCardWidget extends StatelessWidget {
  final Map<String, dynamic> guest;
  final Map<String, dynamic> event;
  final String? qrData;
  final bool isConfirmed;
  final bool isCheckedIn;
  final double width;

  const InvitationCardWidget({
    super.key,
    required this.guest,
    required this.event,
    this.qrData,
    this.isConfirmed = false,
    this.isCheckedIn = false,
    this.width = 350,
  });

  String _formatDate(String? dateStr) {
    if (dateStr == null) return 'À confirmer';
    try {
      final date = DateTime.parse(dateStr);
      return DateFormat('d MMMM yyyy', 'fr_FR').format(date);
    } catch (e) { return 'Date invalide'; }
  }

  String _formatTime(String? dateStr) {
    if (dateStr == null) return '--:--';
    try {
      final date = DateTime.parse(dateStr);
      return DateFormat('HH:mm', 'fr_FR').format(date);
    } catch (e) { return '--:--'; }
  }

  @override
  Widget build(BuildContext context) {
    // Palette "Rustic Botanical"
    const Color primaryColor = Color(0xFF8C7A6B);
    const Color borderColor = Color(0xFFEEE6D9);
    const Color darkTextColor = Color(0xFF2D241D);
    const Color lightTextColor = Color(0xFF6A5A4D);
    const Color paperBg = Color(0xFFF7F3ED);

    final String eventName = event['name'] ?? 'ÉVÉNEMENT';
    final String firstName = guest['first_name'] ?? '';
    final String lastName = guest['last_name'] ?? '';
    final String category = (guest['category'] ?? 'INVITÉ DE PRESTIGE').toString().toUpperCase();
    final String eventDate = _formatDate(event['start_date']);
    final String eventTime = _formatTime(event['start_date']);
    final String location = event['location'] ?? 'Lieu à préciser';
    final String city = event['city'] ?? 'Bunia';
    final String? imageUrl = event['image_url'];
    final bool isCouple = guest['guest_type'] == 'couple';
    final String? companionName = guest['companion_name'];

    return Container(
      width: width,
      decoration: BoxDecoration(
        color: paperBg,
        borderRadius: BorderRadius.circular(40),
      ),
      padding: const EdgeInsets.all(16),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(40),
          border: Border.all(color: Colors.white, width: 8), // Bordure épaisse blanche
          boxShadow: [
            BoxShadow(
              color: const Color(0xFF4A3F35).withOpacity(0.15),
              blurRadius: 50,
              offset: const Offset(0, 20),
            ),
          ],
        ),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(32),
            border: Border.all(color: borderColor, width: 1), // Filet de bordure fin
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(32),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // 1. Image Header avec effet Fade
                Stack(
                  children: [
                    if (imageUrl != null)
                      Image.network(
                        imageUrl,
                        height: 160,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      )
                    else
                      Container(height: 160, color: borderColor),
                    
                    // Dégradé de fusion
                    Positioned.fill(
                      child: Container(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                              Colors.white.withOpacity(0.1),
                              Colors.white.withOpacity(0.4),
                              Colors.white,
                            ],
                          ),
                        ),
                      ),
                    ),
                    
                    // Titre sur l'image
                    Positioned(
                      bottom: 12,
                      left: 0,
                      right: 0,
                      child: Center(
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 6),
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.4),
                            borderRadius: BorderRadius.circular(100),
                            border: Border.all(color: Colors.white.withOpacity(0.4)),
                          ),
                          child: Text(
                            eventName,
                            style: GoogleFonts.playfairDisplay(
                              fontSize: 16,
                              fontWeight: FontWeight.w900,
                              color: darkTextColor,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),

                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                  child: Column(
                    children: [
                      // 2. Info Invité
                      const Icon(Icons.favorite, color: Color(0xFFD4BCA4), size: 12),
                      const SizedBox(height: 8),
                      Text(
                        "POUR L'HONORABLE",
                        style: GoogleFonts.inter(
                          fontSize: 8,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 3,
                          color: primaryColor,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        "$firstName $lastName".toUpperCase(),
                        textAlign: TextAlign.center,
                        style: GoogleFonts.playfairDisplay(
                          fontSize: 24,
                          fontWeight: FontWeight.w900,
                          color: darkTextColor,
                          height: 1.1,
                        ),
                      ),
                      
                      if (isCouple && companionName != null) ...[
                        Text(
                          "&",
                          style: GoogleFonts.playfairDisplay(
                            fontSize: 14,
                            fontStyle: FontStyle.italic,
                            color: primaryColor,
                          ),
                        ),
                        Text(
                          companionName.toUpperCase(),
                          textAlign: TextAlign.center,
                          style: GoogleFonts.playfairDisplay(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                            color: darkTextColor,
                          ),
                        ),
                      ],
                      
                      const SizedBox(height: 10),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFDFCFB),
                          borderRadius: BorderRadius.circular(100),
                          border: Border.all(color: borderColor),
                        ),
                        child: Text(
                          category,
                          style: GoogleFonts.inter(
                            fontSize: 7,
                            fontWeight: FontWeight.w900,
                            letterSpacing: 2,
                            color: primaryColor,
                          ),
                        ),
                      ),

                      const SizedBox(height: 16),
                      const Divider(color: Color(0xFFF2ECE4), height: 1),

                      // 3. Grille Détails (Moment & Lieu)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        child: Row(
                          children: [
                            Expanded(
                              child: Column(
                                children: [
                                  Text(
                                    "LE MOMENT",
                                    style: GoogleFonts.inter(fontSize: 7, fontWeight: FontWeight.w900, color: primaryColor, letterSpacing: 2),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(eventDate, style: GoogleFonts.playfairDisplay(fontSize: 11, fontWeight: FontWeight.w900, color: darkTextColor)),
                                  Text("Dès $eventTime", style: GoogleFonts.playfairDisplay(fontSize: 9, fontStyle: FontStyle.italic, color: primaryColor)),
                                ],
                              ),
                            ),
                            Container(height: 35, width: 1, color: const Color(0xFFF2ECE4)),
                            Expanded(
                              child: Column(
                                children: [
                                  Text(
                                    "LE LIEU",
                                    style: GoogleFonts.inter(fontSize: 7, fontWeight: FontWeight.w900, color: primaryColor, letterSpacing: 2),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(location, textAlign: TextAlign.center, style: GoogleFonts.playfairDisplay(fontSize: 11, fontWeight: FontWeight.w900, color: darkTextColor)),
                                  Text(city, style: GoogleFonts.playfairDisplay(fontSize: 9, fontStyle: FontStyle.italic, color: primaryColor)),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),

                      const Divider(color: Color(0xFFF2ECE4), height: 1),
                      const SizedBox(height: 16),

                      // 4. Section État (QR Code ou Validation)
                      if (isCheckedIn)
                        _buildCheckedInBadge()
                      else if (isConfirmed && qrData != null)
                        _buildQRCode(qrData!, darkTextColor, primaryColor)
                      else
                        Text(
                          "Nous serions honorés de votre présence",
                          style: GoogleFonts.playfairDisplay(
                            fontSize: 10,
                            fontStyle: FontStyle.italic,
                            color: lightTextColor,
                          ),
                        ),

                      const SizedBox(height: 16),
                      const Divider(color: Color(0xFFF2ECE4), height: 1),
                      const SizedBox(height: 8),
                      Text(
                        "Votre présence nous honore.",
                        style: GoogleFonts.playfairDisplay(
                          fontSize: 8,
                          fontStyle: FontStyle.italic,
                          color: lightTextColor.withOpacity(0.4),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildQRCode(String data, Color textColor, Color subColor) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: const Color(0xFFF2ECE4)),
            boxShadow: [
              BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 15, offset: const Offset(0, 5)),
            ],
          ),
          child: QrImageView(
            data: data,
            version: QrVersions.auto,
            size: 100,
            eyeStyle: QrEyeStyle(eyeShape: QrEyeShape.square, color: textColor),
            dataModuleStyle: QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: textColor),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          "PASS D'ACCÈS PERSONNEL",
          style: GoogleFonts.inter(
            fontSize: 7,
            fontWeight: FontWeight.w900,
            letterSpacing: 2.5,
            color: subColor.withOpacity(0.6),
          ),
        ),
      ],
    );
  }

  Widget _buildCheckedInBadge() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAF9),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFE8F0ED)),
      ),
      child: Column(
        children: [
          const Icon(Icons.verified_user_rounded, color: Colors.emerald, size: 24),
          const SizedBox(height: 8),
          Text(
            "INVITATION VALIDÉE",
            style: GoogleFonts.playfairDisplay(
              fontSize: 12,
              fontWeight: FontWeight.w900,
              color: const Color(0xFF2D3A35),
            ),
          ),
          Text(
            "ACCÈS CONFIRMÉ",
            style: GoogleFonts.inter(
              fontSize: 7,
              fontWeight: FontWeight.w900,
              letterSpacing: 2,
              color: const Color(0xFF647C72),
            ),
          ),
        ],
      ),
    );
  }
}
