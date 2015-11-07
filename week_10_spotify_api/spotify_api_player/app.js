var songTemplate;
var outputHtml;
var songData;
var tracks;

$(document).ready(function() {
	var source = $("#song-template").html();

	songTemplate = Handlebars.compile(source);
});

$(document).on("submit", "#song-search-form", function(event) {
	event.preventDefault();

	var userSearch = $("input[name='search']").val();

	$.ajax({
		url: "https://api.spotify.com/v1/search?q=" + userSearch + "&type=track",
		type: "GET",
		success: function(matchedSongs) {
			tracks = matchedSongs.tracks.items;

			$("#song-container").html("");

			for (var i = 0; i < tracks.length; i++) {
				songData = {
					albumImage: tracks[i].album.images[0].url,
					artistName: tracks[i].artists[0].name,
					songTitle: tracks[i].name,
					albumName: tracks[i].album.name,
					previewUrl: tracks[i].preview_url
				}

				outputHtml = songTemplate(songData);
				$("#song-container").append(outputHtml);

				$("input[name='search']").val("");
			}
		},
		error: function() {
			alert("Error grabbing song data");
		}
	});
});