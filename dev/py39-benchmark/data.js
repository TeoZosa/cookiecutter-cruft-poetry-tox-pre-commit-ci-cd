window.BENCHMARK_DATA = {
  "lastUpdate": 1629250244618,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "c4110857e0363caf74174bffcd88a52dafbb4d3e",
          "message": ":bulb: Remove deprecated comment\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-18T01:24:30Z",
          "tree_id": "3334e572af4b22ec1445f88da07a54481d492b0e"
        },
        "date": 1629250242440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14672.94267508856,
            "unit": "iter/sec",
            "range": "stddev: 0.00003947388082612816",
            "extra": "mean: 68.1526550020386 usec\nrounds: 9116"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4122370.073594186,
            "unit": "iter/sec",
            "range": "stddev: 2.1743447101751066e-7",
            "extra": "mean: 242.57890052263508 nsec\nrounds: 49749"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11364.041939178733,
            "unit": "iter/sec",
            "range": "stddev: 0.00013218467099253655",
            "extra": "mean: 87.99685933509227 usec\nrounds: 8993"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125663.5671522166,
            "unit": "iter/sec",
            "range": "stddev: 0.000005672404128716845",
            "extra": "mean: 7.957755956336155 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14662.905009537903,
            "unit": "iter/sec",
            "range": "stddev: 0.000016586984926423806",
            "extra": "mean: 68.1993097104238 usec\nrounds: 14026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4133804.1715481733,
            "unit": "iter/sec",
            "range": "stddev: 2.1531907723436828e-7",
            "extra": "mean: 241.90792754110913 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}