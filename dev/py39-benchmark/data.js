window.BENCHMARK_DATA = {
  "lastUpdate": 1630935049824,
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
          "id": "40251b52f9206f7bdb61412a1060a11bd837cffa",
          "message": "Merge pull request #321 from TeoZosa/dependabot/pip/hypothesis-6.18.0",
          "timestamp": "2021-09-06T13:18:50Z",
          "tree_id": "5e46d8d945038a08db12bc05c7dd69e1673ec2b5"
        },
        "date": 1630935047253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15423.961409457663,
            "unit": "iter/sec",
            "range": "stddev: 0.00005161208914244459",
            "extra": "mean: 64.83418711011687 usec\nrounds: 10395"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4219597.7427366525,
            "unit": "iter/sec",
            "range": "stddev: 3.8314938230561894e-8",
            "extra": "mean: 236.98941486074875 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13951.945001084418,
            "unit": "iter/sec",
            "range": "stddev: 0.000004218272578169943",
            "extra": "mean: 71.67459446853287 usec\nrounds: 5134"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130713.10254584033,
            "unit": "iter/sec",
            "range": "stddev: 7.617731171735247e-7",
            "extra": "mean: 7.65034247159198 usec\nrounds: 40161"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15233.523712570375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005729480847245148",
            "extra": "mean: 65.64469382581665 usec\nrounds: 13832"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4221404.325644767,
            "unit": "iter/sec",
            "range": "stddev: 4.362988098685778e-8",
            "extra": "mean: 236.8879933923777 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}