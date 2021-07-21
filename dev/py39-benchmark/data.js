window.BENCHMARK_DATA = {
  "lastUpdate": 1626873965669,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "2975c367361f3b4291ec73602e9bed48fc4b9a32",
          "message": "Merge pull request #251 from TeoZosa/dependabot/pip/pylint-2.9.5",
          "timestamp": "2021-07-21T13:16:35Z",
          "tree_id": "d95832ada85723a05de1d0762956ffef37b3bbdc"
        },
        "date": 1626873964000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15645.119173806212,
            "unit": "iter/sec",
            "range": "stddev: 0.00009137340009028463",
            "extra": "mean: 63.91769783858513 usec\nrounds: 11934"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4197305.515606297,
            "unit": "iter/sec",
            "range": "stddev: 2.813327057850367e-7",
            "extra": "mean: 238.24808470134974 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13122.391774029733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003567484048989577",
            "extra": "mean: 76.20561992205418 usec\nrounds: 8985"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130761.94020841256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010258419283309782",
            "extra": "mean: 7.647485181132737 usec\nrounds: 32155"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16088.006379537628,
            "unit": "iter/sec",
            "range": "stddev: 0.00001627981729718632",
            "extra": "mean: 62.158105635257726 usec\nrounds: 9192"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4157675.5718261697,
            "unit": "iter/sec",
            "range": "stddev: 4.099942276607432e-8",
            "extra": "mean: 240.51900700876502 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}