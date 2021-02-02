window.BENCHMARK_DATA = {
  "lastUpdate": 1612275311105,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f20b603b3dd0ce956bc408e3e2e31d8be252d3c",
          "message": "Merge pull request #58 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.6.1",
          "timestamp": "2021-02-02T14:10:35Z",
          "tree_id": "451f8c8daec62d2032bd6b73048e51601c8719e7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/7f20b603b3dd0ce956bc408e3e2e31d8be252d3c"
        },
        "date": 1612275309642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15695.174112238601,
            "unit": "iter/sec",
            "range": "stddev: 0.000017613883784786943",
            "extra": "mean: 63.71385196805377 usec\nrounds: 12092"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4095521.955067411,
            "unit": "iter/sec",
            "range": "stddev: 3.8283331137366234e-8",
            "extra": "mean: 244.1691220245919 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13475.927958442284,
            "unit": "iter/sec",
            "range": "stddev: 0.00009185085068415934",
            "extra": "mean: 74.20639254557075 usec\nrounds: 9390"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 166110.13189826158,
            "unit": "iter/sec",
            "range": "stddev: 0.00001395403777736208",
            "extra": "mean: 6.020102377695274 usec\nrounds: 49503"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15232.75448742212,
            "unit": "iter/sec",
            "range": "stddev: 0.00008061917130040163",
            "extra": "mean: 65.648008758082 usec\nrounds: 13245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4032344.2667895467,
            "unit": "iter/sec",
            "range": "stddev: 3.300475806603622e-8",
            "extra": "mean: 247.99469832868226 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}