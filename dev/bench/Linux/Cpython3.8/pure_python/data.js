window.BENCHMARK_DATA = {
  "lastUpdate": 1634045989928,
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
          "id": "04b553809777c106de08e6bfc71870426de97f92",
          "message": "Merge pull request #381 from TeoZosa/dependabot/pip/coverage-6.0.2",
          "timestamp": "2021-10-12T13:14:25Z",
          "tree_id": "a27d19ba5d3ce41ec4a708ac4e0363cc8b24d07e"
        },
        "date": 1634045987490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 111628.1774163304,
            "unit": "iter/sec",
            "range": "stddev: 0.000007193859969399316",
            "extra": "mean: 8.958311630139606 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5919330.103371269,
            "unit": "iter/sec",
            "range": "stddev: 1.856578619646195e-7",
            "extra": "mean: 168.93803564527863 nsec\nrounds: 62112"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 48229.40599280806,
            "unit": "iter/sec",
            "range": "stddev: 0.000010730022618056048",
            "extra": "mean: 20.734238363813134 usec\nrounds: 66667"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 169695.77512543087,
            "unit": "iter/sec",
            "range": "stddev: 0.000001467517278298938",
            "extra": "mean: 5.892898625560025 usec\nrounds: 18553"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 114178.38188830263,
            "unit": "iter/sec",
            "range": "stddev: 0.000006502024587795793",
            "extra": "mean: 8.758225361594901 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5864611.838309219,
            "unit": "iter/sec",
            "range": "stddev: 1.5903571618899364e-7",
            "extra": "mean: 170.51426890139896 nsec\nrounds: 62112"
          }
        ]
      }
    ]
  }
}